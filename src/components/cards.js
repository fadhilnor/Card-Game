import React, { useState, useEffect } from 'react';
import './cards.css';

const CardsComponent = () => {
	const cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'X', 'J', 'Q', 'K'];
	const suits = ['D', 'H', 'S', 'C'];
	const [newDeck, setNewDeck] = useState([]);
	const [player, setPlayer] = useState(1);
	const [serveDeck, setServeDeck] = useState({});
	const [maxPlayer, setMaxPlayer] = useState(false);
	const [isValidationSuccess, setIsValidationSuccess] = useState(false);
	const [validationMessage, setValidationMessage] = useState('');

	// Function to create a new deck of cards
	const initializeDeck = () => {
		let newDeck = [];
		for (var i = 0; i < suits.length; i++) {
			for (var x = 0; x < cards.length; x++) {
				if (x === 0) {
					var card = suits[i] + '\u2011' + cards[x];
					newDeck.push(card);
				} else {
					var card = ' ' + suits[i] + '\u2011' + cards[x];
					newDeck.push(card);
				}
			}
		}
		setNewDeck(newDeck);
	};

	// Create the cards once on load
	useEffect(() => {
		initializeDeck();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	// Function to distibute the cards to number of players
	const servePlayer = (deck) => {
		let serve = [],
			l = 0,
			len = 52,
			size,
			n = player;

		while (l < len) {
			size = Math.ceil((len - l) / n--);
			serve.push(deck.slice(l, (l += size)));
		}

		return serve;
	};

	// Update player value when input changes
	const onChangePlayer = (e) => {
		setIsValidationSuccess(false);
		setValidationMessage('');
		if (!isNaN(e)) {
			setPlayer(parseInt(e));
		} else {
			setPlayer(e);
		}
	};

	// Function to validate player input
	const validatePlayers = () => {
		if (player > 52) {
			setMaxPlayer(true);
		}
		if (player < 1) return { success: false, msg: 'Please enter at least 1 player' };
		if (!Number.isInteger(player))
			return {
				success: false,
				msg: 'Input value does not exist or value is invalid',
			};

		return { success: true, msg: '' };
	};

	// Function to serve the cards
	const onServe = () => {
		setMaxPlayer(false);
		let validation = validatePlayers();

		if (validation.success) {
			// shuffle deck
			newDeck.sort(() => 0.5 - Math.random());

			// serve to players
			setServeDeck({ ...servePlayer(newDeck) });
		} else {
			setServeDeck({});
			setValidationMessage(validation.msg);
		}
	};

	return (
		<div className='container'>
			<h1>Card Game Server</h1>
			<p>Enter number of players:</p>
			<input className='textbox' type='number' value={player} onChange={(e) => onChangePlayer(e.target.value)} />
			<button className='button' onClick={onServe}>
				Serve
			</button>
			<div>
				{Object.keys(serveDeck).map((obj, index) => {
					return (
						<p className='output' key={index}>
							<span>Player {index + 1}</span> {serveDeck[obj].toString()}
						</p>
					);
				})}
				{maxPlayer && player > 53 && <p>Player 53 until {player} has no available cards.</p>}
				{maxPlayer && player === 53 && <p>Player 53 has no available cards.</p>}
				{!isValidationSuccess && validationMessage !== '' && <p className='red'>{validationMessage}</p>}
			</div>
		</div>
	);
};

export default CardsComponent;
