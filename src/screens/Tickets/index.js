/* 
* Copyright (C) 2019-2020 Service Up, http://www.serviceup.com.br
*
* written/edited by:
*  mbernardo@serviceup.com.br
*/

import React, { useState, useEffect } from 'react'
import { View, FlatList, Alert, StyleSheet } from 'react-native'
import { List } from 'react-native-paper'
import { Fontisto } from '@expo/vector-icons'

import api from '../../services/api'

export default function Tickets({ route, navigation }) {

	const [tickets, setTickets] = useState([])
	const [ticketSearch, setTicketSearch] = useState([])

	useEffect(() => {
		searchTickets()
	}, [])

	async function searchTickets() {

		const response = await api.get(`/Ticket`, {
			headers: {
				'content-type': 'application/json',
			},
			params: {
				UserLogin: 'dsilva',
				Password: '123mudar',
				TicketID: 234
			}
		})
		.then()
		.catch(error => {
			Alert.alert(
				'Fail Auth!',
				'Failed to connect to the server.',
				[
					{ text: 'Try again', onPress: () => searchTickets() },
					{ text: 'OK' }
				],
				{ cancelable: true }
			)
		})

		if (response.data.hasOwnProperty('Error')) {
			Alert.alert(
				'Fail Request!',
				'Failed to connect to the server.',
				[
					{ text: 'Try again', onPress: () => searchTicketsv() },
					{ text: 'OK' }
				],
				{ cancelable: true }
			)
		}
		else {

			let ticketIDs = response.data.TicketID

			getTickets(ticketIDs.join(','))
		}
	}

	async function getTickets(ticketIDs) {

		const response = await api.get(`/Ticket/${ticketIDs}`, {
			headers: {
				'content-type': 'application/json',
			},
			params: {
				UserLogin: 'dsilva',
				Password: '123mudar',
				AllArticles: 1
			}
		})
		.then()
		.catch(error => {
			Alert.alert(
				'Fail Auth!',
				'Failed to connect to the server.',
				[
					{ text: 'Try again', onPress: () => getTickets(ticketIDs) },
					{ text: 'OK' }
				],
				{ cancelable: true }
			)
		})

		if (response.data.hasOwnProperty('Error')) {
			Alert.alert(
				'Fail Request!',
				'Failed to connect to the server.',
				[
					{ text: 'Try again', onPress: () => getTickets(ticketIDs) },
					{ text: 'OK' }
				],
				{ cancelable: true }
			)
		}
		else {

			const listTickets = response.data.Ticket

			setTickets(listTickets)
			setTicketSearch(listTickets)
		}
	}

	async function ticketDetail( ticket ) {

        navigation.navigate('TicketDetail', {
            userLogin: route.params.userLogin,
            password: route.params.password,
            ticket: ticket
        })
    }

	const renderItem = (render) => {

		const ticket = render.item

		return (
			<View style={{ padding: 8, borderRadius: 5, margin: 8, borderColor: '#FFF', backgroundColor: '#35344c' }}>
				<List.Item
					titleStyle={{ fontFamily: 'Ubuntu_400Regular', color: '#FFF' }}
					descriptionStyle={{ fontFamily: 'Ubuntu_300Light', color: '#808790' }}
					title={'Ticket#' + ticket.TicketNumber}
					description={ticket.Title}
					left={
						props =>
							<View style={{ justifyContent: 'center', alignItems: 'center' }}>
								<Fontisto name="ticket" size={24} color="#35B5AD" />
							</View>
					}
					onPress={() => ticketDetail(ticket) }
				/>
			</View>
		)
	}

	return (
		<View style={{ flex: 1, backgroundColor: '#2C2B3F' }}>
			<FlatList
				data={ticketSearch}
				renderItem={renderItem}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	quizAttrContent: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		borderTopWidth: 1,
		borderTopColor: '#e0e0e0',
		height: 25,
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
		margin: 5,
		paddingTop: 3
	},
	quizAttrLeft: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 2
	},
	quizAttrMid: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},
	quizAttrRight: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 2
	},
	infoText: {
		color: '#676767',
		fontSize: 15
	},
	infoIcon: {
		color: "#676767",
		marginRight: 5
	}
});