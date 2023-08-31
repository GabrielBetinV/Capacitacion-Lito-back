import { ConfigModule, ConfigService } from "@nestjs/config";
import { DataSource, DataSourceOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";


ConfigModule.forRoot({
    envFilePath: `.${process.env.NODE_ENV}.env`
    //envFilePath: `.dev.env`
  });  

// DB_HOST=localhost
// DB_PORT=5432
// DB_USER=admin
// DB_PASSWORD=my-weak-password
// DB_NAME=postgres

console.log('Envi: ',process.env.NODE_ENV)


const configService = new ConfigService();


console.log('User: ',configService.get('DB_USER'))
console.log('Pass: ',configService.get('DB_PASSWORD'))

export const DataSourceConfig: DataSourceOptions = {
      type: 'postgres',
      host: configService.get('DB_HOST'),
      port: configService.get('DB_PORT'),
      username: configService.get('DB_USER'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_NAME'),
      entities: [__dirname + '/../**/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/../../migrations/*{.ts,.js}'],
      synchronize: false,
      migrationsRun: false,
      namingStrategy: new SnakeNamingStrategy()
}



export const AppDS =  new DataSource(DataSourceConfig) ; 