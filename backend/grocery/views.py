from .models import Store, Category, Item
from rest_framework import generics
from rest_framework import permissions
from .serializer import StoreSerializer, CategorySerializer, ItemSerializer
from rest_framework.views import APIView

class StoreAPI(APIView):
    pass

class StoreViewSet(generics.ListCreateAPIView):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer
    permission_classes = [permissions.IsAuthenticated]

class CategoryAPI(APIView):
    pass

class CategoryViewSet(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAuthenticated]

class ItemAPI(APIView):
    pass

class ItemViewSet(generics.ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = [permissions.IsAuthenticated]
