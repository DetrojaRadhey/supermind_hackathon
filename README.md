# Social Media Analyzer using Astra DB and Langflow

**Live Demo**: https://supermind-hackathon-six.vercel.app/
**Problem explaining and solution Video(YouTube)**: https://www.youtube.com/watch?v=Hc72QnWlcn8&t=16s
**Demo Video link**: https://youtu.be/fRv3SMbldnA

## Problem Statement

In today's marketing landscape, analyzing the impact of social media is crucial for businesses and content creators. However, this task can be complex due to the vast amount of data generated across various platforms. The objective of this project is to build a basic analytics module that leverages AI and data analysis tools to provide insights into social media engagement.

## Solution Overview

To tackle the problem, we will utilize the following tools and technologies:

- **DataStax Astra DB**: A vector database that efficiently stores and retrieves social media engagement data.
- **Langflow**: A workflow creation tool that integrates with AI models to analyze data and generate insights.

### Key Features of the Solution

1. **Data Collection**: 
   - A dataset simulating social media engagement is created, including metrics such as likes, shares, comments, and post types (e.g., carousel, reel, static image).
   - The dataset is stored in DataStax Astra DB for efficient querying.

2. **Data Analysis**:
   - Using Langflow, a workflow is built to accept post types as input and query the dataset to calculate average engagement metrics for each type.
   - The analysis focuses on understanding which post types yield the highest engagement.

3. **Insight Generation**:
   - The integration of Gemini within Langflow allows for the generation of insights based on the analyzed data.
   - Example insights include:
     - "Carousel posts have 20% higher engagement than static posts."
     - "Reels drive 2x more comments compared to other formats."

### Implementation Steps

1. **Setup Database**: 
   - Create a DataStax Astra DB instance and set up the schema to store the engagement data.

2. **Data Ingestion**:
   - Populate the database with the mock social media engagement dataset.

3. **Workflow Creation**:
   - Develop a Langflow workflow that queries the database and processes the data to calculate engagement metrics.

4. **Insight Generation**:
   - Use Gemini to analyze the results and generate actionable insights.

## Conclusion

This project aims to simplify the process of social media performance analysis by leveraging advanced tools like DataStax Astra DB and Langflow. By providing clear insights into engagement metrics, businesses can make informed decisions to enhance their social media strategies.

---

### Project Structure

- **@server**: Contains the backend code for handling API requests and database interactions.
- **@client**: Contains the frontend code for the user interface.
- **@Data_Resources**: Contains the dataset used for analysis.
- **@images**: Contains images of Langflow that we have created.
