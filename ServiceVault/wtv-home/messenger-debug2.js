var wtvrsvc_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

data = `<HTML>
	<HEAD>
		<TITLE>Blim Test Page </TITLE>
		<SCRIPT LANGUAGE="JavaScript">

/**************************************************************************/
   Globals
/**************************************************************************/

			var keepGoing = true;
			var currentArray;
			var currentIndex = 0;
			var mode = "S";
			var currentArray = new Array();

			// these are the list of commands that can be executed by the different tests...
			var commandArray2 = new Array
							(
							);

			var commandArray1 = new Array
							(
								"Blim.openMessagesPanel();",
								"startRandomConversation();",
								"sendRandomMessage();",
								"setRandomConversation();",
								"sendRandomMessage();",
								"maybeInviteBuddy(1, myRandom(numOnlineBuddies()));",
								"setRandomConversation();",
								"maybeCloseConversation(0.5);"
							);

			// this is a list of messages that will be sent
			var messagesArray = new Array
									(
										"Hi there..this is a automated blim test test test.....",
										"blim test - This is a somewhat longer message but not by much",
										"Blim test- This is a multi line message, I have to keep on writing because we want a multiple line message that could put messenger on some stress even if I doubt so",
										"Tanto va la gatta al lardo che ci rimette lo zampino..."
										);
/**************************************************************************/
   Blim commands
/**************************************************************************/
			function startRandomConversation()
			{
				startConversation(myRandom(numOnlineBuddies()));
			}

			function setRandomConversation()
			{
				if(getNumConversations() > 0 )
					setConversation(myRandom(getNumConversations()))
			}
			
			// start a conversation with "index" online friend
			function startConversation(index)
			{
				Blim.openConversation(GetIDOfOnlineBuddy(index));
			}

			function sendMessage(index)
			{
				var realIndex = index % messagesArray.length;
				Blim.sendMessage(messagesArray[realIndex]);
			}

			function sendRandomMessage()
			{
				sendMessage(myRandom(messagesArray.length));
			}

			function maybeCloseConversation(probability)
			{
				if(Math.random() < probability)
					Blim.closeConversation();
			}

			function maybeInviteBuddy(probability, index)
			{
				if(Math.random() < probability)
				{
					Blim.addToCurrentConversation(GetIDOfOnlineBuddy(index));
				}
			}

			function getNumConversations()
			{
				return Blim.getNumConversations();
			}

			function setConversation(index)
			{
				var realIndex = index % getNumConversations();
				Blim.setConversationByIndex(index);
			}

/**************************************************************************/
   Command list execution
/**************************************************************************/

			function doTestMain()
			{
				setStatus(commandArray1[0]);
				var test = document.forms[0].BlimTestNum.options[document.forms[0].BlimTestNum.selectedIndex].text;
				Blim.setEnableMonkey(true);
				if(test == "one")
					doTestOne();
			}

			function stopTest()
			{
				keepGoing= false;
			}

			function doTestOne()
			{
				mode = "SL"; // call the list of commands in sequence and loop
				currentArray = commandArray1;
				currentIndex = 0;
				cycle();
			}


			function cycle()
			{
				if(!keepGoing)
					return;

				if(currentIndex >= currentArray.length)
					return;
				eval(currentArray[currentIndex]);
				
				currentIndex += 1;

				if(mode == "SL")
					if(currentIndex >= currentArray.length)
						currentIndex = 0;
				
				setTimeout("cycle()", 2*1000);

			}
			
			function setStatus(inStatus)
			{				
				document.forms[0].status.value = inStatus;
			}


/**************************************************************************/
   Utilities
/**************************************************************************/
			// get id on nth online buddy
			function GetIDOfOnlineBuddy(index)
			{
				var realIndex = index % numOnlineBuddies();

				var listLen = Blim.listLength("FL");
				var friendID; 
				var numBuddies = 0;
				for(i=0; i<= listLen; i++)
				{
					friendID = Blim.listItem("FL",i);
					if(Blim.isFriendOnline(friendID))
					{
						if(realIndex == 0)
						{
							break;
						}
						else
							realIndex--;
						
					}
				}	
				return friendID;
			
			}

			
			// returns a random integer number between 0 and maxValue-1
			function myRandom(maxValue)
			{
				return Math.round(Math.random()*(maxValue) - 0.5);
			}

			// how many friends are online
			function numOnlineBuddies()
			{
				var listLen = Blim.listLength("FL");
				var friendID; 
				var numBuddies = 0;
				for(i=0; i<= listLen; i++)
				{
					friendID = Blim.listItem("FL",i);
					if(Blim.isFriendOnline(friendID))
					{
						numBuddies++;
					}
				}
				return numBuddies;
			}

		</SCRIPT>
		</HEAD>
			<BODY  FONTSIZE="medium" HSPACE="0" VSPACE="0" >
				<FORM>
					<P>
						<FONT COLOR="#FFFFFF">Status:</FONT> 				
						<INPUT TYPE="TEXT" NAME="status" SIZE="90">
					</P>
					<input value="start" type=button onclick="doTestMain()">
					<input value="stop" type=button onclick="stopTest()">
					<br>
					Test Number: 
					<SELECT NAME="BlimTestNum">
						<OPTION SELECTED>one
						<OPTION>two
						<OPTION>three
					</SELECT>
				</FORM>
			</BODY>
		</HTML>	
`;
