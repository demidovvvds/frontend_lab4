interface NotificationSender {
  send(contact: string, message: string): void;
}

class LegacySmsService {
  deliver(phoneNumber: string, text: string): void {
    console.log(`[LegacySMS] To: ${phoneNumber} | Text: ${text}`);
  }
}

class SmsAdapter implements NotificationSender {
  private legacySms: LegacySmsService;

  constructor(legacySms: LegacySmsService) {
    this.legacySms = legacySms;
  }

  send(contact: string, message: string): void {
    this.legacySms.deliver(contact, message);
  }
}

const legacyService = new LegacySmsService();
const sender: NotificationSender = new SmsAdapter(legacyService);

sender.send("+79123456789", "hello via adapter!");