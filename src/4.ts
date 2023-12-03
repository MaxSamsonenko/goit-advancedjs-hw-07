class Key {
	private signature: number;
	constructor() {
		this.signature = Number(Math.random().toFixed(5));
	}

	getSignature(): number {
		return this.signature;
	}
}

class Person {
	private key: Key;

	constructor(key: Key) {
		this.key = key;
	}
	getKey(): Key {
		return this.key;
	}
}

abstract class House {
	protected door: boolean;
	protected key: Key;
	protected tenants: Person[];

	constructor(key: Key) {
		this.door = false;
		this.key = key;
		this.tenants = [];
	}
	comeIn(tenant: Person): void {
		if (this.door) {
			this.tenants.push(tenant);
			console.log("Please come in.");
		} else {
			console.log("Sorry the door is locked");
		}
	}
	abstract openDoor(tenant: Key): void;
}

class MyHouse extends House {
	constructor(key: Key) {
		super(key);
	}

	openDoor(key: Key): void {
		if (key.getSignature() === this.key.getSignature()) {
			this.door = true;
			console.log("The door is open.");
		} else {
			console.log("Cannot open the door. Wrong key.");
		}
	}
}

const key = new Key();

const house = new MyHouse(key);

const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
