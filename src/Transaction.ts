const sha256 = require("./helpers");
import { hash, hashValidado } from './helpers'

class Transaction {
	to: any;
	from: any;
	amount: any;
	id: any;
	hash: any;
	static count: any;
	constructor(to: any, from: any, amount: any) {
		this.to = to;
		this.from = from;
		this.amount = amount;
		this.id = Transaction.getCount();
		this.hash = sha256(this.to + this.from + this.amount + this.id);
		Transaction.incrementCount();
	}

	static getCount() {

		return Transaction.count;
	}

	static incrementCount() {
		Transaction.count++;
	}

	getHash() {
		return sha256(this.to + this.from + this.amount + this.id);
	}

	toString() {
		return `
        to:${this.to}
        from:${this.from}
        amount:${this.amount}
        hash:${this.hash}
        id:${this.id}`;
	}
}

Transaction.count = 0;

module.exports = Transaction;
