import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as morgan from 'morgan';
import { ConfigService } from '@nestjs/config';
import { CORS } from './constans';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const refelector = app.get(Reflector);

  app.useGlobalInterceptors(new ClassSerializerInterceptor(refelector));

  app.use(morgan('dev'))

  app.setGlobalPrefix('api');

  app.enableCors(CORS);


  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Litoplas Api')
    .setDescription('This is our first doc for Litoplas Api')
    .setVersion('1.0')
    .addTag('Litoplas')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document, {
    explorer: true,
    swaggerOptions: {
      filter: true,
      showRequestDuration: true
    }
  });



  const config2 = new DocumentBuilder()
    .setTitle('Litoplas Api V2')
    .setDescription('This is our first doc for Litoplas Api')
    .setVersion('2.0')
    .addTag('Litoplas')
    .build();

  const document2 = SwaggerModule.createDocument(app, config2);
  SwaggerModule.setup('api/docs/v2', app, document2, {
    explorer: true,
    swaggerOptions: {
      filter: true,
      showRequestDuration: true
    }


  });

  //  const configService = app.get(ConfigService);
  //  console.log(configService.get('PORT'))
  //   await app.listen(configService.get('PORT'));


  console.log(process.env.PORT)
  await app.listen(process.env.PORT);


  console.log(`Application running on: ${await app.getUrl()}`)

}
bootstrap();
