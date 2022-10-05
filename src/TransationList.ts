class TransactionList {
    list: any;
	constructor() {
		this.list = [];
	}

	add(transaction: any) {
		this.list.push(transaction);
	} 
}

module.exports = TransactionList;
