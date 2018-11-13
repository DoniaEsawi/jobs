import TwitterClient from '../clients/TwitterClient';
import ContentClient from '../clients/ContentClient';

async function runJob() {
    console.log(`Beginning job PostTweet: ${new Date()}`);
    const response = await ContentClient.getRandomQuote();
    const quote = response.content;
    console.log(`About to tweet "${quote}"`);
    await TwitterClient.postTweet(`${quote} #RightAction`);
    console.log(`Finished job PostTweet: ${new Date()}`);
}
runJob();
