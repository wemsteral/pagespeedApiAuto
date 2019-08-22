# An automated script for use with a Google sheet

1. Get your API key from https://developers.google.com/speed/docs/insights/v5/get-started
2. Set up a new google sheet under any name
3. Go to 'Tools => Script Editor'
4. Copy and paste this script into the editor
5. Copy and paste your API key `var pageSpeedApiKey =`'_HERE_`';`
6. Remove the existing URLs in the `urls` array and add yours as per the style:
   ![ss1](https://github.com/wemsteral/pagespeedApiAuto/blob/master/ss1.png)

   (in quotations and separated with commas)

7. Add a corresponding tab for each URL in the spreadsheet and update the tabs array, as per same style again.
   ![ss2](https://github.com/wemsteral/pagespeedApiAuto/blob/master/ss1.png)
   Note:

- These need to correspond exactly with the name of the tabs in the spreadsheet (case sensitive etc.)
- The urls & tabs arrays need to be in the same order and have same amount of items.
