const express = require('express');
const app = express();
const http = require('http');
const path = require('path');  
var twilio = require('twilio');
var AccessToken = require('twilio').jwt.AccessToken;
var VideoGrant = AccessToken.VideoGrant;
const { connect ,  LocalAudioTrack, LocalVideoTrack} = require('twilio-video');
app.use(express.json());
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

var ACCOUNT_SID = 'AC9908e96bc673c953048aeb673f254237';
	var API_KEY_SID = 'SK010b2bea9eac153bb87673699b7fb71c';
	var API_KEY_SECRET = 'gLVtcm0sZHaNBfTjQmensWw7fWaPrw6i';
	var accessToken = new AccessToken(
	  ACCOUNT_SID,
	  API_KEY_SID,
	  API_KEY_SECRET
	);
	accessToken.identity = 'user1';
	var grant = new VideoGrant();
	grant.room = 'cool room';
	accessToken.addGrant(grant);
	var jwt = accessToken.toJwt();

	
	
	
app.get("/", function (req, res){
	var ACCOUNT_SID = 'AC9908e96bc673c953048aeb673f254237';
	var API_KEY_SID = 'SK010b2bea9eac153bb87673699b7fb71c';
	var API_KEY_SECRET = 'gLVtcm0sZHaNBfTjQmensWw7fWaPrw6i';
	var accessToken = new AccessToken(
	  ACCOUNT_SID,
	  API_KEY_SID,
	  API_KEY_SECRET
	);
	accessToken.identity = 'example-user';
	var grant = new VideoGrant();
	grant.room = 'cool room';
	accessToken.addGrant(grant);
	var jwt = accessToken.toJwt();
	var ss;
	//console.log(jwt);
	
	const mediaStream =  navigator.mediaDevices.getUserMedia(constraints);
const tracks = mediaStream.getTracks().map(track => track.kind === 'audio'
  ? new LocalAudioTrack(track) : new LocalVideoTrack(track));
	connect(jwt, { tracks }).then(room => {
	//connect(jwt, { tracks }).then(room => {
		console.log(`Successfully joined a Room: ${room}`);
		room.on('participantConnected', participant => {
			res.send(`A remote Participant connected: ${participant}`);
		});
	}, error => {
		res.send(`Unable to connect to Room: ${error.message}`);
	});
	
	/* connect(jwt, { name:'cool room', tracks: [{audio: true, video: false }]}).then(room => {
		console.log(`Successfully joined a Room: ${room}`);
		room.on('participantConnected', participant => {
			res.send(`A remote Participant connected: ${participant}`);
		});
	}, error => {
		res.send(`Unable to connect to Room: ${error.message}`);
	}); */
});
app.get("/media", function (req, res){
	var ACCOUNT_SID = 'AC9908e96bc673c953048aeb673f254237';
	var API_KEY_SID = 'SK010b2bea9eac153bb87673699b7fb71c';
	var API_KEY_SECRET = 'gLVtcm0sZHaNBfTjQmensWw7fWaPrw6i';
	var accessToken = new AccessToken(
	  ACCOUNT_SID,
	  API_KEY_SID,
	  API_KEY_SECRET
	);
	accessToken.identity = 'user1';
	var grant = new VideoGrant();
	grant.room = 'cool room';
	accessToken.addGrant(grant);
	var jwt = accessToken.toJwt();
	connect(jwt, {
	  audio: true,
	  name: 'cool room',
	  video: { width: 640 }
	}).then(room => {
	  res.send(`Connected to Room: ${room.name}`);
	});
}); 

/* 
const Video = require('twilio-video');
app.get("/ss", function (req, res){
Video.connect(jwt, { name: 'cool' }).then(room => {
  console.log('Connected to Room "%s"', room.name);

  room.participants.forEach(participantConnected);
  room.on('participantConnected', participantConnected);

  room.on('participantDisconnected', participantDisconnected);
  room.once('disconnected', error => room.participants.forEach(participantDisconnected));
});

function participantConnected(participant) {
  console.log('Participant "%s" connected', participant.identity);

  const div = document.createElement('div');
  div.id = participant.sid;
  div.innerText = participant.identity;

  participant.on('trackSubscribed', track => trackSubscribed(div, track));
  participant.on('trackUnsubscribed', trackUnsubscribed);

  participant.tracks.forEach(publication => {
    if (publication.isSubscribed) {
      trackSubscribed(div, publication.track);
    }
  });

  document.body.appendChild(div);
}

function participantDisconnected(participant) {
  console.log('Participant "%s" disconnected', participant.identity);
  document.getElementById(participant.sid).remove();
}

function trackSubscribed(div, track) {
  div.appendChild(track.attach());
}

function trackUnsubscribed(track) {
  track.detach().forEach(element => element.remove());
}
}); */

/* const room =  connect(jwt, { tracks: [] });
let localVideoTrack;
try {
  localVideoTrack =  createLocalVideoTrack();
} catch (error) {
  console.warn('Looks like you don\'t have a camera; proceeding without');
}

if (localVideoTrack) {
   //room.localParticipant.publishTrack(localVideoTrack);
 console.log(room);
}
 */

/* connect(jwt, {
    name: 'cool room',
    audio: true,
    video: false
}).then(function (room) {
    console.log(room);
}).catch(function (error) {
    console.log(error);
});

//app.get("/connect", function (req, res){
	connect(jwt, { name:'cool room', tracks: []}).then(room => {
		console.log(`Successfully joined a Room: ${room}`);
		room.on('participantConnected', participant => {
			console.log(`A remote Participant connected: ${participant}`);
		});
	}, error => {
		console.error(`Unable to connect to Room: ${error.message}`);
	});
	
	navigator.mediaDevices.getUserMedia({ audio: true, video: false }) */
/* 	createLocalVideoTrack({
	  audio: true,
	  video: { width: 640 }
	}).then(localTracks => {
	  return connect(jwt, {
		name: 'cool room',
		tracks: localTracks
	  });
	}).then(room => {
	  console.log(`Connected to Room: ${room.name}`);
	}); */
	
	
//});
	
	
/* const fs = require('fs');
app.post("/callback", function (req, res){
	var data = req;
	fs.writeFile('texst.txt', data,  function(err, data){
		if (err) console.log(err);
		console.log("Successfully Written to File.");
	});
}); */


//var promise = navigator.mediaDevices.getUserMedia({ audio: false, video: false });
//Option 1
/* createLocalTracks({
  audio: true,
  video: false //{ width: 640 }
}).then(localTracks => {
  return connect('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2RjMjhlNThiN2RmZTc2YjJjM2M2MzZmMzI5OGQwNWY5LTE1NTMwNTYyMTIiLCJpc3MiOiJTS2RjMjhlNThiN2RmZTc2YjJjM2M2MzZmMzI5OGQwNWY5Iiwic3ViIjoiQUM5OTA4ZTk2YmM2NzNjOTUzMDQ4YWViNjczZjI1NDIzNyIsImV4cCI6MTU1MzA1OTgxMiwiZ3JhbnRzIjp7ImlkZW50aXR5IjoidmlkZW8gY2hhdCIsInZpZGVvIjp7fX19.I5SpnwTmiWEhI31_4Oqm80V4eKgWkHVt56jPfLQjpQQ', {
    name: 'test',
    tracks: localTracks
  });
}).then(room => {
  console.log(`Connected to Room: ${room.name}`);
}); */

// Option 2
/* connect('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2RjMjhlNThiN2RmZTc2YjJjM2M2MzZmMzI5OGQwNWY5LTE1NTMwNTYyMTIiLCJpc3MiOiJTS2RjMjhlNThiN2RmZTc2YjJjM2M2MzZmMzI5OGQwNWY5Iiwic3ViIjoiQUM5OTA4ZTk2YmM2NzNjOTUzMDQ4YWViNjczZjI1NDIzNyIsImV4cCI6MTU1MzA1OTgxMiwiZ3JhbnRzIjp7ImlkZW50aXR5IjoidmlkZW8gY2hhdCIsInZpZGVvIjp7fX19.I5SpnwTmiWEhI31_4Oqm80V4eKgWkHVt56jPfLQjpQQ', {
  audio: true,
  name: 'my-room-name',
  video: false //{ width: 640 }
}).then(room => {
  console.log(`Connected to Room: ${room.name}`);
}); */

// Log your Client's LocalParticipant in the Room
/* const localParticipant = room.localParticipant;
console.log(`Connected to the Room as LocalParticipant "${localParticipant.identity}"`);

// Log any Participants already connected to the Room
room.participants.forEach(participant => {
  console.log(`Participant "${participant.identity}" is connected to the Room`);
});

// Log new Participants as they connect to the Room
room.once('participantConnected', participant => {
  console.log(`Participant "${participant.identity}" has connected to the Room`);
}); */

// Log Participants as they disconnect from the Room
/* room.once('participantDisconnected', participant => {
  console.log(`Participant "${participant.identity}" has disconnected from the Room`);
});

room.on('participantConnected', participant => {
  console.log(`Participant connected: ${participant.identity}`);
});

room.on('participantDisconnected', participant => {
  console.log(`Participant disconnected: ${participant.identity}`);
});

// Attach the Participant's Media to a <div> element.
room.on('participantConnected', participant => {
  console.log(`Participant "${participant.identity}" connected`);

  participant.tracks.forEach(publication => {
    if (publication.isSubscribed) {
      const track = publication.track;
      document.getElementById('remote-media-div').appendChild(track.attach());
    }
  });

  participant.on('trackSubscribed', track => {
    document.getElementById('remote-media-div').appendChild(track.attach());
  });
});

const { createLocalVideoTrack } = require('twilio-video');

createLocalVideoTrack().then(track => {
  const localMediaContainer = document.getElementById('local-media');
  localMediaContainer.appendChild(track.attach());
});

room.on('disconnected', room => {
  // Detach the local media elements
  room.localParticipant.tracks.forEach(publication => {
    const attachedElements = publication.track.detach();
    attachedElements.forEach(element => element.remove());
  });
});

// To disconnect from a Room
room.disconnect(); */
