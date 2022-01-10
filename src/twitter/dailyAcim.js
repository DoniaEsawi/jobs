import { getDayOfYear } from 'date-fns';
import AcimClient from '../clients/AcimClient';
import TwitterClient from '../clients/TwitterClient';

async function dailyAcim() {
	console.log(`Beginning job PostTweet: ${new Date()}`);
	let dayNumber = getDayOfYear(Date.now());
	if (dayNumber == 366) {
		dayNumber = 95;
	}

	const lesson = AcimClient.getLessonByNumber(dayNumber);
	const tweet = `${lesson.title}\n#acim W-${lesson.number}`;

	const { data: createdTweet } = await TwitterClient.tweet(tweet);
	console.log(`Just tweeted ${tweet}. Tweet ID: ${createdTweet.id}`)
}

dailyAcim();
