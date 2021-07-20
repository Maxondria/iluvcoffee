import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      /**
       * Automatically strip props that don't match Dtos.
       * It will remove all properties that don't have any validation decorators in the dto.
       *
       * Tip: if no other decorator is suitable for your property use @Allow decorator.
       */
      whitelist: true,
      /**
       * Make sure if any unwanted properties are sent to the server via request bodies,
       * we throw an error clearly stating which properties should not exist.
       */
      forbidNonWhitelisted: true,
      /**
       * Automatically transform request payloads to the Dto.
       * Also casts [numbers and booleans] (For example, ids from patch endpoints that come in as strings)
       * from strings to correct types.
       */
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  await app.listen(3000);
}

bootstrap();
