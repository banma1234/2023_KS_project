from flask import Flask
import datetime
  
timeNow = datetime.datetime.now()
  
app = Flask(__name__)
  
# Route for seeing a data
@app.route('/api/data')
def get_time():
  
    # Returning an api for showing in  reactjs
    return {
        'Name':"KS_project",
        "Date":timeNow, 
        "programming":"python"
        }
      
# Running app
if __name__ == '__main__':
    app.run(debug=True)