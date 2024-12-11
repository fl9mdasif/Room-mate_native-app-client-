import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Alert } from 'react-native';

import { User } from '@/types';
import { useUser } from '@clerk/clerk-expo';
import { createUser, getFavoriteFlats } from '@/api/userApi'

const UserProfileScreen = () => {
    const { user } = useUser();

    const userEmail = user?.primaryEmailAddress?.emailAddress as string;

    const [profile, setProfile] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchProfile = async () => {
        try {
            setLoading(true);
            if (!user) {
                throw new Error("User not not available");
            }

            if (user) {
                const userFullName = user.fullName as string;
                const userEmail = user.primaryEmailAddress?.emailAddress as string;

                // Create user in the database
                try {
                    const response = await createUser(userFullName, userEmail);
                    console.log('createUser response:', response);
                } catch (apiError) {
                    console.error('createUser API error:', apiError);
                }
            } else {
                console.error('User object not populated in time');
            }
            const userProfile = await getFavoriteFlats(userEmail);
            setProfile(userProfile);

            console.log('user', profile)
        } catch (error: any) {
            Alert.alert('Error', error.message || 'Failed to fetch profile');
        } finally {
            setLoading(false);
        }
    };



    useEffect(() => {
        if (userEmail) {
            fetchProfile();
        }
    }, [userEmail]);

    if (loading) {
        return <Text style={styles.loadingText}>Loading...</Text>;
    }

    if (!profile) {
        return <Text style={styles.errorText}>Profile not found</Text>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Name: {profile?.name}</Text>
            <Text style={styles.subtitle}>Favorite Flat Lists:</Text>
            <FlatList
                data={profile.favoriteFlats}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: item.images }} style={styles.image} />
                        <Text style={styles.flatTitle}>{item.title}</Text>
                        <Text style={styles.flatDetails}>
                            {item.location} - ৳{item.rent}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f9f9f9',
    },
    loadingText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
    },
    errorText: {
        fontSize: 18,
        textAlign: 'center',
        color: 'red',
        marginTop: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 10,
    },
    card: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2,
    },
    image: {
        width: 300,
        height: 150,
        borderRadius: 8,
        marginBottom: 10,
    },
    flatTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    flatDetails: {
        fontSize: 14,
        color: '#555',
    },
});

export default UserProfileScreen;
