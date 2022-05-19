import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROBOT_FACTORY } from '@robo/domain';
import { RobotFactoryService } from './services';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: ROBOT_FACTORY,
      useClass: RobotFactoryService,
    },
  ],
})
export class DataModule {}
