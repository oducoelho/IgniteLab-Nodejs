import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['capital-rodent-7495-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'Y2FwaXRhbC1yb2RlbnQtNzQ5NSRb5p-Hs40lLrQR8LBimCRNqDsYxP395PyoBc8',
          password:
            'ooBPIY_dxDS-eSeqgIleomYNNnXire0EqmYV5l5FRj5BTtO5JFy3hKF5kwpFX4NGOdcuow==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
