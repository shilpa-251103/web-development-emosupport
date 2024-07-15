
import os
import google.auth
from googleapiclient.discovery import build
from transformers import pipeline, RobertaForSequenceClassification, RobertaTokenizer
import sys

def main():
    video_id = sys.argv[1]
    # Get credentials
    api_key = "AIzaSyDIEwEMitbO6mhAoBwvlGlJ3XnXMPDTuY0"

    # Create YouTube API client
    youtube = build('youtube', 'v3', developerKey=api_key)

    # Set video ID
    #video_id = '_5ecgEXLoCA'

    # Call the API to get comments
    comments = []
    results = youtube.commentThreads().list(
        part = 'snippet',
        videoId = video_id,
        textFormat = 'plainText',
        ).execute()

    # Loop through each comment and append to comments list
    while results:
        for item in results['items']:
            comment = item['snippet']['topLevelComment']['snippet']['textDisplay']
            comments.append(comment)

        # Check if there are more comments and continue iterating
        if 'nextPageToken' in results:
            results = youtube.commentThreads().list(
                part = 'snippet',
                videoId = video_id,
                textFormat = 'plainText',
                pageToken = results['nextPageToken']
            ).execute()
        else:
            break

    model = RobertaForSequenceClassification.from_pretrained('arpanghoshal/EmoRoBERTa', from_tf=True)
    tokenizer = RobertaTokenizer.from_pretrained('arpanghoshal/EmoRoBERTa')
    
    # Continue with your code...
    emotion = pipeline('sentiment-analysis', model=model, tokenizer=tokenizer)
    
    # Print the comments
    #print(" Number of comments : ", len(comments))
    for i , comment in enumerate(comments):
        if i < 10:
            print(emotion(comment),"\n")

        else:
            break
        
if __name__ == "__main__":
    main()