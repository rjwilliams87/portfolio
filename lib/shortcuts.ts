import { AboutFolder } from '../components/AboutFolder';
import { Email } from '../components/Email';
import { GamesFolder } from '../components/GamesFolder';
import { ProjectsFolder } from '../components/ProjectsFolder';
import { SettingsFolder } from '../components/SettingsFolder';
import { TShortcut } from '../context/shortcuts';

export const ABOUT: TShortcut = {
  id: 'about_0',
  folder: AboutFolder,
  image: '',
  title: 'About',
};

export const EMAIL: TShortcut = {
  id: 'email_0',
  folder: Email,
  image: '',
  title: 'Email',
};

export const GAMES: TShortcut = {
  id: 'games_0',
  folder: GamesFolder,
  image: '',
  title: 'Games',
};

export const PROJECTS: TShortcut = {
  id: 'projects_0',
  folder: ProjectsFolder,
  image: '',
  title: 'Projects',
};

export const SETTINGS: TShortcut = {
  id: 'settings_0',
  folder: SettingsFolder,
  image: '',
  title: 'Settings',
};

export const SHORTCUTS: TShortcut[] = [ABOUT, PROJECTS, EMAIL, GAMES, SETTINGS];
