package com.example

object TicketGenerator {

    private const val TICKET_SIZE = 20

    private const val MAX_PROBABILITY = 100

    private const val TICKET_ONE = 1
    private const val TICKET_TWO = 2
    private const val TICKET_THREE = 3
    private const val TICKET_FOUR = 4
    private const val TICKET_EIGHT = 8
    private const val TICKET_SEVEN3 = 777

    private const val UPPER_BOUND_1 = 30
    private const val UPPER_BOUND_2 = 60
    private const val UPPER_BOUND_3 = 75
    private const val UPPER_BOUND_4 = 85
    private const val UPPER_BOUND_8 = 95

    private fun generateTicketCell(): Int {
        val outcome = (1..MAX_PROBABILITY).random()
        return when (outcome) {
            in (1..UPPER_BOUND_1) -> TICKET_ONE
            in ((UPPER_BOUND_1 + 1)..(UPPER_BOUND_2)) -> TICKET_TWO
            in ((UPPER_BOUND_2 + 1)..UPPER_BOUND_3) -> TICKET_THREE
            in ((UPPER_BOUND_3 + 1)..UPPER_BOUND_4) -> TICKET_FOUR
            in ((UPPER_BOUND_4 + 1)..UPPER_BOUND_8) -> TICKET_EIGHT
            else -> TICKET_SEVEN3
        }
    }

    fun generateTicket() = (0 until TICKET_SIZE).map { generateTicketCell() }
}
