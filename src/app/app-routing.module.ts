import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import {LoginComponent} from './login/login.component';
import {IndexComponent} from './index/index.component';
import {LessonsComponent} from './teacher/lessons/lessons.component';
import {MindmapComponent} from './teacher/mindmap/mindmap.component';
import {CoursesComponent} from './student/courses/courses.component';
import {StudentmapComponent} from './student/studentmap/studentmap.component';


import {ShomeworkComponent} from './student/shomework/shomework.component';
import {SresourceComponent} from './student/sresource/sresource.component';
import {ScoursewareComponent} from './student/scourseware/scourseware.component';
import {ThomeworkComponent} from './teacher/thomework/thomework.component';
import {TresourceComponent} from './teacher/tresource/tresource.component';
import {TcoursewareComponent} from './teacher/tcourseware/tcourseware.component';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'index', component: IndexComponent },
  { path: 'mindmap/:username/:id', component: MindmapComponent },
  { path: 'studentmap/:username/:id', component: StudentmapComponent},
  { path: 'teacher/:username', component: LessonsComponent },
  { path: 'student/:username', component: CoursesComponent },
  { path: 'shomework/:username/:mapid/:lid/:node_id', component: ShomeworkComponent},
  { path: 'sresource/:username/:mapid/:lid/:node_id', component: SresourceComponent},
  { path: 'scourseware/:username/:mapid/:lid/:node_id', component: ScoursewareComponent},
  { path: 'thomework/:username/:mapid/:lid/:node_id', component: ThomeworkComponent},
  { path: 'tresource/:username/:mapid/:lid/:node_id', component: TresourceComponent},
  { path: 'tcourseware/:username/:mapid/:lid/:node_id', component: TcoursewareComponent},

  { path: 'mindmap', component: MindmapComponent },
  { path: 'studentmap', component: StudentmapComponent},
  { path: 'teacher', component: LessonsComponent },
  { path: 'student', component: CoursesComponent },
  { path: 'shomework', component: ShomeworkComponent},
  { path: 'sresource', component: SresourceComponent},
  { path: 'scourseware', component: ScoursewareComponent},
  { path: 'thomework', component: ThomeworkComponent},
  { path: 'tresource', component: TresourceComponent},
  { path: 'tcourseware', component: TcoursewareComponent},
  { path: '', redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
