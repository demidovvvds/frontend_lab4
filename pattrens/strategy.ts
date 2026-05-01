interface SendStrategy {
  send(contact: string, message: string): void;
}

class EmailStrategy implements SendStrategy {
  send(contact: string, message: string): void {
    console.log(`Sending email to ${contact}: ${message}`);
  }
}

class PushStrategy implements SendStrategy {
  send(contact: string, message: string): void {
    console.log(`Sending push to device ${contact}: ${message}`);
  }
}

class NotificationService {
  private strategy: SendStrategy | null;

  constructor() {
    this.strategy = null;
  }

  setStrategy(strategy: SendStrategy): void {
    this.strategy = strategy;
  }

  sendNotification(contact: string, message: string): void {
    if (this.strategy === null) {
      throw new Error("Strategy not set");
    }

    this.strategy.send(contact, message);
  }
}

const service = new NotificationService();

service.setStrategy(new EmailStrategy());
service.sendNotification("dmitry@pochta.com", "hello via email!");

service.setStrategy(new PushStrategy());
service.sendNotification("dmitry's computer", "hello via push!");