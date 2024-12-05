const express = require("express");
const app = express();
const cors = require("cors");  // Correct import for cors
app.use(cors({
    origin: "http://localhost:3000",  // Allow requests from the frontend
    methods: "GET",  // Allow only GET requests
    allowedHeaders: "Content-Type"  // Allow the Content-Type header
}));

const blog = [
    {
        "blog": {
          "name": "Beauty Bliss",
          "description": "Your go-to source for beauty tips, skincare routines, and makeup tutorials.",
          "url": "https://beautybliss.example.com"
        },
        "authors": [
          {
            "id": 1,
            "name": "Sophia Grace",
            "email": "sophia@example.com",
            "bio": "Certified skincare expert and beauty enthusiast.",
            "profilePicture": "https://images.unsplash.com/photo-1577471749137-f7e57f68d928?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJlYXV0eXxlbnwwfDB8fHx8&ixlib=rb-1.2.1&q=80&w=400"
          },
          {
            "id": 2,
            "name": "Liam Harper",
            "email": "liam@example.com",
            "bio": "Makeup artist and beauty product reviewer.",
            "profilePicture": "https://images.unsplash.com/photo-1560850369-01b60105ec1b?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDYyfHxjYXRlZ29yeXxlbnwwfDB8fHx8&ixlib=rb-1.2.1&q=80&w=400"
          }
        ],
        "categories": [
          {
            "id": 1,
            "name": "Skincare",
            "description": "Tips and routines for healthy, glowing skin."
          },
          {
            "id": 2,
            "name": "Makeup",
            "description": "Tutorials and product reviews for all your makeup needs."
          },
          {
            "id": 3,
            "name": "Haircare",
            "description": "Advice for maintaining luscious, beautiful hair."
          }
        ],
        "posts": [
          {
            "id": 1,
            "title": "5 Steps to a Glowing Skincare Routine",
            "content": "Discover the secrets to achieving radiant skin with this simple skincare routine.",
            "authorId": 1,
            "categoryId": 1,
            "tags": ["Skincare", "Healthy Skin", "Glow"],
            "publishedDate": "2024-12-04T10:00:00Z",
            "likes": 150,
            "image": "https://images.unsplash.com/photo-1597237856582-7cbd9bb78a43?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJlYXV0eXxlbnwwfDB8fHx8&ixlib=rb-1.2.1&q=80&w=800",
            "comments": [
              {
                "id": 1,
                "author": "Emma Taylor",
                "content": "This routine changed my life! My skin feels amazing.",
                "postedDate": "2024-12-04T12:00:00Z"
              },
              {
                "id": 2,
                "author": "Noah Williams",
                "content": "Great tips! Do you recommend any specific products for oily skin?",
                "postedDate": "2024-12-04T13:00:00Z"
              }
            ]
          },
          {
            "id": 2,
            "title": "Top 10 Makeup Products of 2024",
            "content": "A comprehensive guide to the best makeup products of the year.",
            "authorId": 2,
            "categoryId": 2,
            "tags": ["Makeup", "Beauty Products", "Trends"],
            "publishedDate": "2024-11-30T10:00:00Z",
            "likes": 230,
            "image": "https://images.unsplash.com/photo-1562682062-3db611ffbe40?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDMxfHxjYXRlZ29yeXxlbnwwfDB8fHx8&ixlib=rb-1.2.1&q=80&w=800",
            "comments": []
          }
        ]
      }
];

app.get("/", (req, res) => {
    res.json(blog);  // Changed to send the data as JSON
});

app.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
});
