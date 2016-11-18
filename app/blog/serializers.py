from rest_framework import serializers
from django.contrib.auth.models import User
from .models import BlogEntry


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}


class BlogEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogEntry
        fields = '__all__'

"""
class PlaylistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Playlist
        fields = '__all__'
        #fields = ('name', 'parent', 'genres', 'filters',)

    filters = PlaylistFilterSerializer(many=True)

    def create(self, validated_data):
        filters = validated_data.pop('filters')

        playlist = Playlist.objects.create(**validated_data)
        playlist.save()

        for f in filters:
            pf = PlaylistFilter.objects.create(playlist=playlist, **f)
            pf.save()

        return playlist

    def update(self, instance, validated_data):
        filters = validated_data.pop('filters')

        instance = super(PlaylistSerializer, self).update(instance, validated_data)
        PlaylistFilter.objects.filter(playlist=instance).delete()
        for f in filters:
            pf = PlaylistFilter.objects.create(playlist=instance, **f)
            pf.save()
        return instance
"""