interface Observer {
  update(message: string): void;
}

interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(message: string): void;
}

class NewsPublisher implements Subject {
  private observers: Observer[];

  constructor() {
    this.observers = [];
  }

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    const index: number = this.observers.indexOf(observer);

    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(message: string): void {
    for (const observer of this.observers) {
      observer.update(message);
    }
  }
}

class EmailSubscriber implements Observer {
  private email: string;

  constructor(email: string) {
    this.email = email;
  }

  update(message: string): void {
    console.log(`Email to ${this.email}: ${message}`);
  }
}

class PhoneSubscriber implements Observer {
  private phone: string;

  constructor(phone: string) {
    this.phone = phone;
  }

  update(message: string): void {
    console.log(`SMS to ${this.phone}: ${message}`);
  }
}

const publisher = new NewsPublisher();
const dmitry = new EmailSubscriber("dmitry@pochta.com");
const pavel = new PhoneSubscriber("+79123456789");

publisher.attach(dmitry);
publisher.attach(pavel);
publisher.notify("system update at 06:07 am");

publisher.detach(pavel);
publisher.notify("only dmitry gets this");