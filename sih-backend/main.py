import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import TfidfVectorizer
from datetime import datetime
import random

class AdvancedHolidayRecommender:
    def __init__(self):
        # Initialize with a more comprehensive dataset of holiday destinations
        self.destinations = pd.DataFrame({
            'name': ['Mountain Resort', 'Beach Paradise', 'Hill Station', 'City Break', 'Island Getaway', 
                     'Cultural Town', 'Adventure Park', 'Ski Resort', 'Tropical Rainforest', 'Desert Oasis'],
            'type': ['mountains', 'beach', 'hilly', 'city', 'beach', 
                     'city', 'mountains', 'mountains', 'forest', 'desert'],
            'family_friendly': [1, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            'friend_friendly': [1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
            'budget_level': [3, 4, 2, 3, 5, 2, 4, 5, 3, 4],
            'has_ritual_place': [1, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            'has_bars': [0, 1, 0, 1, 1, 1, 0, 1, 0, 0],
            'has_restaurants': [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            'suitable_seasons': ['summer,fall', 'summer,spring', 'summer,spring,fall', 'all', 'summer,fall', 
                                 'all', 'summer,spring', 'winter', 'all', 'fall,winter,spring'],
            'activities': ['hiking,skiing,relaxation', 'swimming,sunbathing,water sports', 'trekking,sightseeing', 
                           'sightseeing,shopping,nightlife', 'snorkeling,beach activities,boating',
                           'museum visits,local cuisine,historical tours', 'zip-lining,rock climbing,nature walks',
                           'skiing,snowboarding,apres-ski', 'wildlife spotting,canopy walks,river rafting',
                           'camel riding,stargazing,sand boarding'],
            'avg_temperature': [15, 28, 20, 22, 30, 18, 25, -5, 27, 35],
            'rainfall': [2, 1, 3, 2, 2, 2, 1, 4, 5, 0],
            'popularity': [8, 9, 6, 8, 7, 7, 8, 9, 5, 6],
            'description': [
                'A serene mountain getaway with breathtaking views and outdoor activities.',
                'Sun-soaked beaches with crystal clear waters, perfect for relaxation and water sports.',
                'Misty hills and winding roads lead to this tranquil retreat.',
                'Bustling metropolis with endless entertainment and cultural experiences.',
                'Remote paradise surrounded by turquoise waters and coral reefs.',
                'Rich in history and tradition, offering a glimpse into local heritage.',
                'Thrilling outdoor experiences for the whole family.',
                'World-class slopes and cozy chalets for winter sports enthusiasts.',
                'Lush, biodiverse wonderland teeming with exotic flora and fauna.',
                'Mystical desert landscape with luxurious resorts and unique experiences.'
            ]
        })
        self.scaler = MinMaxScaler()
        self.scaled_features = self.scaler.fit_transform(self.destinations[['family_friendly', 'friend_friendly', 'budget_level', 'has_ritual_place', 'has_bars', 'has_restaurants', 'avg_temperature', 'rainfall', 'popularity']])
        
        # TF-IDF vectorizer for text-based features
        self.tfidf = TfidfVectorizer(stop_words='english')
        self.tfidf_matrix = self.tfidf.fit_transform(self.destinations['description'] + ' ' + self.destinations['activities'])

    def recommend(self, preferences):
        user_vector = [
            preferences.get('family_friendly', 0),
            preferences.get('friend_friendly', 0),
            preferences.get('budget_level', 3) / 5,  # Normalize budget to 0-1 scale
            preferences.get('has_ritual_place', 0),
            preferences.get('has_bars', 0),
            preferences.get('has_restaurants', 0),
            (preferences.get('preferred_temperature', 25) - self.destinations['avg_temperature'].min()) / 
            (self.destinations['avg_temperature'].max() - self.destinations['avg_temperature'].min()),
            preferences.get('prefer_dry_climate', 0.5),  # 0 for wet, 1 for dry
            0.5  # Placeholder for popularity, as it's not directly input by user
        ]
        user_vector = self.scaler.transform([user_vector])
        
        # Calculate content-based similarity
        content_similarities = cosine_similarity(user_vector, self.scaled_features)
        
        # Calculate text-based similarity if activities are provided
        if 'preferred_activities' in preferences:
            user_text = ' '.join(preferences['preferred_activities'])
            user_tfidf = self.tfidf.transform([user_text])
            text_similarities = cosine_similarity(user_tfidf, self.tfidf_matrix)
            
            # Combine content-based and text-based similarities
            similarities = (content_similarities + text_similarities) / 2
        else:
            similarities = content_similarities
        
        # Get sorted indices of destinations
        sorted_indices = similarities.argsort()[0][::-1]
        
        # Filter destinations
        filtered_destinations = self.destinations.iloc[sorted_indices]
        filtered_destinations = filtered_destinations[
            (filtered_destinations['type'] == preferences['destination_type']) &
            (filtered_destinations['budget_level'] <= preferences['budget_level'])
        ]
        
        # Season-based filtering
        if 'travel_date' in preferences:
            travel_date = datetime.strptime(preferences['travel_date'], '%Y-%m-%d')
            season = self.get_season(travel_date)
            filtered_destinations = filtered_destinations[filtered_destinations['suitable_seasons'].str.contains(season)]
        
        # Handle edge case: No matching destinations
        if filtered_destinations.empty:
            return self.handle_no_matches(preferences)
        
        return filtered_destinations

    def get_season(self, date):
        month = date.month
        if month in [3, 4, 5]:
            return 'spring'
        elif month in [6, 7, 8]:
            return 'summer'
        elif month in [9, 10, 11]:
            return 'fall'
        else:
            return 'winter'

    def handle_no_matches(self, preferences):
        # Relax constraints and try again
        relaxed_preferences = preferences.copy()
        relaxed_preferences['budget_level'] += 1  # Increase budget
        relaxed_recommendations = self.recommend(relaxed_preferences)
        
        if not relaxed_recommendations.empty:
            return relaxed_recommendations.head(1).append(pd.DataFrame({
                'name': ['Custom Package'],
                'description': ['We can create a custom package to meet your specific requirements.']
            }))
        else:
            return pd.DataFrame({
                'name': ['No Matches', 'Custom Package'],
                'description': [
                    'We couldn\'t find any destinations matching your criteria.',
                    'We can create a custom package to meet your specific requirements.'
                ]
            })

    def get_personalized_itinerary(self, destination, preferences):
        # Generate a personalized itinerary based on the chosen destination and user preferences
        activities = destination['activities'].split(',')
        num_days = preferences.get('trip_duration', 3)
        itinerary = {}

        for day in range(1, num_days + 1):
            daily_activities = random.sample(activities, min(3, len(activities)))
            itinerary[f"Day {day}"] = daily_activities

        return itinerary

    def get_price_estimate(self, destination, preferences):
        # Generate a rough price estimate based on destination and user preferences
        base_price = destination['budget_level'] * 100 
        num_travelers = preferences.get('num_travelers', 1)
        trip_duration = preferences.get('trip_duration', 3)
        
        total_price = base_price * num_travelers * trip_duration
        
        # Apply discounts or surcharges based on season
        if 'travel_date' in preferences:
            travel_date = datetime.strptime(preferences['travel_date'], '%Y-%m-%d')
            season = self.get_season(travel_date)
            if season in ['summer', 'winter']:  # Peak seasons
                total_price *= 1.2
            else:
                total_price *= 0.9
        
        return round(total_price, 2)

# Example usage
recommender = AdvancedHolidayRecommender()
user_preferences = {
    'destination_type': 'beach',
    'family_friendly': 1,
    'friend_friendly': 0,
    'budget_level': 4,
    'has_ritual_place': 1,
    'has_bars': 0,
    'has_restaurants': 1,
    'preferred_temperature': 28,
    'prefer_dry_climate': 0.7,
    'preferred_activities': ['swimming', 'relaxation', 'sightseeing'],
    'travel_date': '2024-07-15',
    'trip_duration': 5,
    'num_travelers': 4
}

recommendations = recommender.recommend(user_preferences)
print("Top Recommendations:")
print(recommendations[['name', 'description']])

if not recommendations.empty:
    top_choice = recommendations.iloc[0]
    print("\nPersonalized Itinerary for", top_choice['name'])
    itinerary = recommender.get_personalized_itinerary(top_choice, user_preferences)
    for day, activities in itinerary.items():
        print(f"{day}: {', '.join(activities)}")
    
    print("\nEstimated Price:")
    price = recommender.get_price_estimate(top_choice, user_preferences)
    print(f"${price} for {user_preferences['num_travelers']} travelers and {user_preferences['trip_duration']} days")