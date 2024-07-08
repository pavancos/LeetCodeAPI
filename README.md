
## About ✨

`leetcode.com/graphql`. 

## Endpoints 🚀

### 👤User Details

| Details                       | Endpoint                             | Description                                                          | Demo                                                              |
| :---------------------------- | :----------------------------------- | :------------------------------------------------------------------- | ----------------------------------------------------------------- |
| _Profile_                     | `/:username`                         | Get details about a user's profile.                                  | <a href="./public/demo/demo2.png" target="_blank">click here</a>  |
| _Badges_                      | `/:username/badges`                  | Get the badges earned by the user.                                   | <a href="./public/demo/demo3.png" target="_blank">click here</a>  |
| _Solved_                      | `/:username/solved`                  | Get the total number of questions solved by the user.                | <a href="./public/demo/demo4.png" target="_blank">click here</a>  |
| _Contest_                     | `/:username/contest`                 | Get details about the user's contest participation.                  | <a href="./public/demo/demo5.png" target="_blank">click here</a>  |
| _Contest History_             | `/:username/contest/history`         | Get contest history.                                                 | <a href="./public/demo/demo6.png" target="_blank">click here</a>  |
| _Submission_                  | `/:username/submission`              | Get the last 20 submissions of the user.                             | <a href="./public/demo/demo7.png" target="_blank">click here</a>  |
| _Limited Submission_          | `/:username/submission?limit=number` | Get a specified **_number_** of the user's last submissions.         | <a href="./public/demo/demo8.png" target="_blank">click here</a>  |
| _Accepted Submission_         | `/:username/acSubmission`            | Get the last 20 accepted submission of the user.                     | <a href="./public/demo/demo16.png" target="_blank">click here</a> |
| _Limited Accepted Submission_ | `/:username/acSubmission?limit=7`    | Get a specified **_number_** of the user's last accepted submission. | <a href="./public/demo/demo17.png" target="_blank">click here</a> |
| _Calendar_                    | `/:username/calendar`                | Get the user's submission calendar.                                  | <a href="./public/demo/demo9.png" target="_blank">click here</a>  |

### 😀 New Endpoints 🎉

| Details                | Endpoint                                           | Description                          |
| :--------------------- | :------------------------------------------------- | :----------------------------------- |
| _Full Profile_         | `/userProfile/:username`                           | get full profile details in one call |
| _Year Calender_        | `/userProfileCalendar?username=yourname&year=2024` | get your calendar details with year  |
| _Lang Stats_           | `/languageStats?username=yourname`                 | get the language stats of a user     |
| _Question Progress_    | `/userProfileUserQuestionProgressV2/:userSlug`     | get your question progress           |
| _Skill Stats_          | `/skillStats/:username`                            | get your skill stats                 |
| _User Contest Ranking_ | `/userContestRankingInfo/:username`                | get contest ranking                  |
| _Trending Discussion_  | `/trendingDiscuss?first=20`                        | get top 20 trending discussions      |
| _Discussion Topic_     | `/discussTopic/:topicId`                           | get discussion topic                 |
| _Discussion Comment_   | `/discussComments/:topicId`                        | get discussion comments              |
| _Raw Daily Problem_    | `/dailyQuestion`                                   | get raw daily question               |

### ❓Questions Details

| Details                     | Endpoint                                     | Description                                                                      | Demo                                                              |
| :-------------------------- | :------------------------------------------- | :------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| _Daily Problem_             | `/daily`                                     | Get the daily question.                                                          | <a href="./public/demo/demo10.png" target="_blank">click here</a> |
| _Selected Problem_          | `/select?titleSlug=selected-question`        | Get details about a **_selected-question_**.                                     | <a href="./public/demo/demo11.png" target="_blank">click here</a> |
| _Problems_                  | `/problems`                                  | Get a list of 20 problems.                                                       | <a href="./public/demo/demo12.png" target="_blank">click here</a> |
| _Limited Problems_          | `/problems?limit=number`                     | Get a list of a specified **_number_** of problems.                              | <a href="./public/demo/demo13.png" target="_blank">click here</a> |
| _Filter Problems_           | `/problems?tags=tag1+tag2`                   | Get a list of problems based on selected **_tags_**.                             | <a href="./public/demo/demo14.png" target="_blank">click here</a> |
| _Filter & Limited Problems_ | `/problems?tags=tag1+tag2+tag3&limit=number` | Get a list of a specified **_number_** of problems based on selected **_tags_**. | <a href="./public/demo/demo15.png" target="_blank">click here</a> |
