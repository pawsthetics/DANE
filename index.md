---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

<html>
    <head>
    </head>
    <body>
        <form name="wait" netlify>
            <input type="radio" name="location" value="1" checked> Location 1<br>
            <input type="radio" name="location" value="2"> Location 2<br>
            <input type="radio" name="location" value="Both"> Merged Locations
                <br><br>
            <input type="radio" name="date" value="today" checked> Use Today's Date:
            <script> document.write(new Date().toLocaleDateString()); </script>
                <br>
            <input type="radio" name="date" value="day"> Enter Desired Date:
            <input type="text" name="firstinput"><br>
                <br><br>
            Enter Client's Wait Time:<br>
            <input type="text" name="firstinput"><br>
        </form>
        <div> <button class="button" id="complete" data-export="export">Export</button>
        </div>
    </body>
</html>



Click <a href="http://127.0.0.1:4000/collect/">here</a> to <u>collect</u> your own data.

Click <a href="http://127.0.0.1:4000/import2/">here</a> to <u>import</u> your own data.
