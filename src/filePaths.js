import path from 'path';
import {
  DEFAULT_BASE_PATH,
  FIREBASE_CONFIG_FILE_NAME,
  DEFAULT_TEST_FOLDER_PATH,
  DEFAULT_CONFIG_FILE_NAME,
  DEFAULT_TEST_ENV_FILE_NAME,
  DEFAULT_TEST_CONFIG_FILE_NAME,
} from './constants';

// override constants if provided
const base_path = process.env.BASE_PATH || DEFAULT_BASE_PATH;
const test_folder_path = process.env.TEST_FOLDER_PATH || DEFAULT_TEST_FOLDER_PATH;
const firebase_config_file_name = process.env.FIREBASE_CONFIG_FILE_NAME || FIREBASE_CONFIG_FILE_NAME;
const default_test_config_file_name = process.env.DEFAULT_TEST_CONFIG_FILE_NAME || DEFAULT_TEST_CONFIG_FILE_NAME;
const default_test_env_file_name = process.env.DEFAULT_TEST_ENV_FILE_NAME || DEFAULT_TEST_ENV_FILE_NAME;
const default_config_file_name = process.env.DEFAULT_CONFIG_FILE_NAME || DEFAULT_CONFIG_FILE_NAME;

export const FIREBASE_CONFIG_FILE_PATH = path.join(
  base_path,
  firebase_config_file_name
);
export const TEST_CONFIG_FILE_PATH = path.join(
  base_path,
  default_test_config_file_name
);
export const TEST_ENV_FILE_PATH = path.join(
  base_path,
  default_test_env_file_name
);
export const LOCAL_CONFIG_FILE_PATH = path.join(
  base_path,
  test_folder_path,
  default_config_file_name
);
