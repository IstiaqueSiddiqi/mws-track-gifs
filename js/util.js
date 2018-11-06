
/**
 * Utility Functions
 */

/**
 * 
 * @description This method is a utility function to log error message on console
 * @param {object} error - error object
 * @param {string} methodName - method name where error happened
 * @author Istiaque Siddiqi
 */
const logErrorMsg = (error, methodName) => {
    console.log(`%c*********************** ERROR | ${Date()} | Method: ${methodName} ***********************`, 'color: white; background-color: red; padding: 4px');
    console.log(error.message);
    console.log(error.stack);
    console.trace();
    console.log(`%c******************************************************************* END *******************************************************************`, 'color: white; background-color: red; padding: 4px');
}

/**
 * @description Method to show snackbar
 * @param {string} toastMsg - Toast message
 * @author Istiaque Siddiqi
 */
const showToast = (toastMsg) => {
    Snackbar.show({
        text: toastMsg,
        actionText: 'OK',
        actionTextColor: '#f44336',
        textColor: '#fff',
        pos: 'bottom-center'
    });
}

/**
 * 
 * @description Checks for online presence
 * @param {object} event 
 * @author Istiaque Siddiqi
 */
const isOnline = (event) => {
    let toastMsg;
    if (event.type === "offline") {
        console.log(`You lost connection.`);
        toastMsg = `You lost connection.`
        isConnected = false;
    } else if (event.type === "online") {
        console.log(`You are now online.`);
        toastMsg = `You are now online.`;
        isConnected = true;
    }
    showToast(toastMsg);
}
window.addEventListener('online', isOnline);
window.addEventListener('offline', isOnline);


//  GIF Categories
const GIF_CATEGORIES = new Set([
    'Waiting', 'Thank You', 'Shocked', 'No', 'Laughing', 'Thumbs Up', 'Popcorn',
    'Good Luck', 'Eye Roll', 'Cats', 'Dogs', 'Classics', 'Congratulations', 'Dancing', 'Mind Blown',
    'Excited', 'Confused', 'Love', 'Yes', 'Good Morning', 'Good Night', 'Miss You', 'Friendship', 'Get Well', 'Sympathy', 'Compliments',
    'Birthday', 'Graduation', 'Engagement & Wedding', 'Anniversary', 'New Baby',
    'Halloween', 'Diwali', 'Christmas', 'New Year', 'Valentine\'s Day', 'Mother\'s Day',
    'Father\'s Day', 'Eid Mubarak', 'High Five', 'Clapping', 'Shrug', 'Sorry', 'Cheers',
    'Wink', 'Angry', 'Nervous', 'Oops', 'Hungry', 'Hugs', 'Wow', 'Bored', 'Awkward',
    'Aww', 'Please', 'Yikes', 'OMG', 'Bye', 'Loser', 'Cold', 'Party', 'Excuse Me', 'What',
    'Stop', 'Sleepy', 'Creep', 'Scared', 'Chill Out', 'Done'
].sort());


/**
 * 
 * @description This method is used to shorten the title to two words at most and 
 * if webp format is not available than fallback to another fomrat
 * @param {object} gif - JSON object
 * @author Istiaque Siddiqi
 */
const customizeGifObject = (gif) => {
    let title = gif.title;
    title = title.split(' ');
    // getting only first two word from title
    title = (title.length === 1) ? `${title[0]}` : `${title[0]} ${title[1]}`;
    title = title.toUpperCase();

    let img = gif.images.original;
    // Fallback if webp format is not available   
    img = ((img.webp === '') || (img.webp === undefined) || (img.webp === null)) ? img.url : img.webp;
    gif = { img, title };
    return gif;
}