# emooo.py
# from transformers import pipeline, RobertaForSequenceClassification, RobertaTokenizer
# from flask import Flask,request,render_template,jsonify
# import sys

# app = Flask(__name__)


# @app.route('/Result', methods=['POST'])
# def Afterlogin():
#     context = request.form['a'] # Get input from the command line

#     # Load the model from TensorFlow weights
#     model = RobertaForSequenceClassification.from_pretrained('arpanghoshal/EmoRoBERTa', from_tf=True)
#     tokenizer = RobertaTokenizer.from_pretrained('arpanghoshal/EmoRoBERTa')
    
#     # Continue with your code...
#     emotion = pipeline('sentiment-analysis', model=model, tokenizer=tokenizer)
#     emotion_labels = emotion(context)
    
#     #print(emotion_labels)
#     return render_template('Result.html', emotion1=emotion_labels)


# @app.route('/Afterlogin')
# def man():
#     return render_template('Afterlogin.js')



# if __name__ == "__main__":
#     app.run(debug=True)
# emooo.py
from transformers import pipeline, RobertaForSequenceClassification, RobertaTokenizer
import sys

def main():
    context = sys.argv[1] # Get input from the command line

    # Load the model from TensorFlow weights
    model = RobertaForSequenceClassification.from_pretrained('arpanghoshal/EmoRoBERTa', from_tf=True)
    tokenizer = RobertaTokenizer.from_pretrained('arpanghoshal/EmoRoBERTa')
    
    # Continue with your code...
    emotion = pipeline('sentiment-analysis', model=model, tokenizer=tokenizer)
    emotion_labels = emotion(context)
    print(emotion_labels[0])

if __name__ == "__main__":
    main()