//We will type rafce to access the main componet on app.jsx
//To use rafce we need tpo install an extension called ES7 react redux

//Nav bar
const [sticky, setSticky] = useState(false);

/*  
This sets up a state variable called sticky, initialized to false.

setSticky() updates this value.

This will be used to control whether a "sticky" or "dark" class is applied to the navbar based on scroll position.
 */

useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  /*
  This sets up a scroll event listener that runs whenever the user scrolls the page.

If the user scrolls down more than 50 pixels, sticky becomes true. Otherwise, it stays false.

The [] ensures this effect runs only once when the component mounts.

⚠️ Note: This version of the code does not clean up the event listener, which could cause performance issues or memory leaks. A cleaner version would be:

  */

useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  /*

  */
  