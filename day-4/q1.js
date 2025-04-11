let data = [
    {
      "movieName": "The Shawshank Redemption",
      "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      "rating": 4.8,
      "bestScenes": [
        {
          "title": "Andy Dufresne escapes from prison",
          "duration": "15 mins"
        },
        {
          "title": "Brooks was here",
          "duration": "10 mins"
        }
      ]
    },
    {
      "movieName": "The Godfather",
      "actors": ["Marlon Brando", "Al Pacino", "James Caan"],
      "rating": 4.9,
      "bestScenes": [
        {
          "title": "Horse head in bed",
          "duration": "5 mins"
        },
        {
          "title": "Cannoli scene",
          "duration": "3 mins"
        }
      ]
    },
    {
      "movieName": "The Dark Knight",
      "actors": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      "rating": 4.8,
      "bestScenes": [
        {
          "title": "Opening bank robbery",
          "duration": "12 mins"
        },
        {
          "title": "Why So Serious interrogation",
          "duration": "8 mins"
        }
      ]
    },
    {
      "movieName": "The Lord of the Rings: The Return of the King",
      "actors": ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
      "rating": 4.9,
      "bestScenes": [
        {
          "title": "Ride of the Rohirrim",
          "duration": "10 mins"
        },
        {
          "title": "Frodo destroys the One Ring",
          "duration": "7 mins"
        }
      ]
    }
  ]
  let longestScene = {
    movieName: "",
    longestSceneDuration: -Infinity
  };
  
  for (let i = 0; i < data.length; i++) {
    let max_duration = -Infinity;
  
    for (let j = 0; j < data[i].bestScenes.length; j++) {
      let durationStr = data[i].bestScenes[j].duration;
      let duration = parseInt(durationStr);
  
      if (duration > max_duration) {
        max_duration = duration;
      }
    }
    if (max_duration > longestScene.longestSceneDuration) {
      longestScene = {
        movieName: data[i].movieName,
        longestSceneDuration: max_duration
      };
    }
  }
  
  console.log(longestScene);
  