var OAuth = require('oauth');

module.exports = {
    fetchWeatherDetails: (req, res) => {
        let queryParam = req.query.param;
        let options = {
            url: 'https://weather-ydn-yql.media.yahoo.com/forecastrss?location='+queryParam+'&format=json',
            headers :{
                "X-Yahoo-App-Id": "LhbjYu72"
            }
        };
        const request = new OAuth.OAuth(
            null,
            null,
            'dj0yJmk9WVpuMFhHclRhMWVWJmQ9WVdrOVRHaGlhbGwxTnpJbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTIx',
            '2f6b5a4aa17d3e25b6711a7ed38f83f9aef80859',
            '1.0',
            null,
            'HMAC-SHA1',
            null,
            options.headers
        );
        request.get(options.url, null, null,  (err, response,) => {
            if (err) {
                return null;
            } else {
                res.status(200);
                res.json(JSON.parse(response));
            }
        });
    },
   
}
