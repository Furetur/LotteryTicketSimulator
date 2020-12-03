package com.example

import java.util.concurrent.atomic.AtomicInteger
import kotlin.math.max

object GameManager {
    private const val INITIAL_MONEY = 5
    private const val TICKET_PRICE = 1
    private const val MOM_MONEY = 5

    private var money = AtomicInteger(INITIAL_MONEY)

    fun getMoney() = money.get()

    fun buyTicket(): List<Int> {
        val previousMoney = money.getAndUpdate { max(0, it - 1) }
        return if (previousMoney >= TICKET_PRICE) {
            TicketGenerator.generateTicket()
        } else {
            throw NotEnoughMoneyException()
        }
    }

    fun redeemPrize(prize: Int): Int {
        return money.addAndGet(prize)
    }

    fun getMoneyFromMom(): Int {
        return money.addAndGet(MOM_MONEY)
    }

    class NotEnoughMoneyException : IllegalStateException()
}
