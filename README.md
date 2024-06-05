# Challenge - Historical Comp Data

The challenge is to create a web application that displays historical comp data. 

See [Historical Comp Data](./data/projects.csv) for reference mock data.

The application should have the following APIs - 
1. To get historical data for a project
```
// GET /api/project/1 Example Response Body
{
	"success": true,
	"data": {
		"Project ID": "1",
		"Project Name": "Humitas Hewlett Packard",
		"Year": "2024",
		"Currency": "EUR",
		"Initial Budget (Local)": "316974.50",
		"Budget (USD)": "233724.23",
		"Initial Schedule Estimate (Months)": "13",
		"Adjusted Schedule Estimate (Months)": "12",
		"Contingency Rate (%)": "2.19",
		"Escalation Rate (%)": "3.46",
		"Final Budget (USD)": "247106.75"
	}
}
```
2. To add historical data for a project
```
// Example Request Body
{
	"Project ID": "10001",
	"Project Name": "Humitas Butterfly",
	"Year": "2024",
	"Currency": "EUR",
	"Initial Budget (Local)": "316974.50",
	"Budget (USD)": "233724.23",
	"Initial Schedule Estimate (Months)": "13",
	"Adjusted Schedule Estimate (Months)": "12",
	"Contingency Rate (%)": "2.19",
	"Escalation Rate (%)": "3.46",
	"Final Budget (USD)": "247106.75"
}

```

3. To ask questions regarding the data & respond with an answer
```
// POST /api/ask Example Request Body

{
	"question": "Can you tell me some details regarding Project Humitas Hewlett Butterfly?"
}
```
```
// POST /api/ask Example Response Body
{
	"success": true,
	"data": "Project Humitas Hewlett Butterfly is a project that took place in 2024 with an initial budget of 316974.50 EUR. The budget in USD was 233724.23, and the initial schedule estimate was 13 months, which was later adjusted to 12 months. The project had a contingency rate of 2.19% and an escalation rate of 3.46%. The final budget in USD for Project Humitas Hewlett Butterfly was 247106.75."
}
```

# Requirements
1. Use Redis for persistence
2. Use Open AI APIs for AI
3. New endpoints to build
    - `GET` /api/project/{project_id}
    - `POST` /api/project/{project_id}
    - `POST` /api/ask
4. API Tests
    - Each endpoint should have its own test
    - Write all tests in test/endpoint.js
    - Use `servertest` to test the endpoints

# Instructions
1. Create a new repo in your account and note the git url
2. Clone this repo
3. Solve the challenge, following our [coding guidelines](https://github.com/superstruct-tech/onboarding)
4. Set your new repo as the origin: `git remote set-url origin ${your repo url}`
5. Push your solution to your repo

You must follow these steps for your solution to be accepted -- forks or other methods will not be considered.
