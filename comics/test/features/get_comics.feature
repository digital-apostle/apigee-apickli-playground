Feature:
	Get Weekly Comics

	Scenario: get Weekly Comics
		Given I set User-Agent header to apickli
		When I GET /acme_comics_apiproxy
	    Then response code should be 200
		Then response body should be valid json
	
