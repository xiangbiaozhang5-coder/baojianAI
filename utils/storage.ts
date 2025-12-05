import { Project, Character, Settings, GenerationModel } from '../types';

const KEYS = {
  PROJECTS: 'baojian_projects',
  CHARACTERS: 'baojian_characters',
  SETTINGS: 'baojian_settings'
};

const DEFAULT_SETTINGS: Settings = {
  apiKey: '',
  baseUrl: 'https://bj.nfai.lol/',
  textModel: 'gemini-2.5-flash',
  imageModel: GenerationModel.NANOBANANA,
  jianYingPath: 'C:/Users/Admin/AppData/Local/JianYingPro/User Data/Projects/',
  outputImgPath: 'D:/AI_Output/',
  themeColor: '#f97316' // Default Orange
};

export const storage = {
  getProjects: (): Project[] => {
    const data = localStorage.getItem(KEYS.PROJECTS);
    return data ? JSON.parse(data) : [];
  },
  saveProjects: (projects: Project[]) => {
    localStorage.setItem(KEYS.PROJECTS, JSON.stringify(projects));
  },
  getCharacters: (): Character[] => {
    const data = localStorage.getItem(KEYS.CHARACTERS);
    return data ? JSON.parse(data) : [];
  },
  saveCharacters: (chars: Character[]) => {
    localStorage.setItem(KEYS.CHARACTERS, JSON.stringify(chars));
  },
  getSettings: (): Settings => {
    const data = localStorage.getItem(KEYS.SETTINGS);
    return data ? { ...DEFAULT_SETTINGS, ...JSON.parse(data) } : DEFAULT_SETTINGS;
  },
  saveSettings: (settings: Settings) => {
    localStorage.setItem(KEYS.SETTINGS, JSON.stringify(settings));
  }
};