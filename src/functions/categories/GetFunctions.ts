import { FunctionDefinition } from '../types';

// List of valid Get function constants
export const GET_CONSTANTS = new Set([
  'AccountExtendedPrivileges',
  'AccountGroupName',
  'AccountName',
  'AccountPrivilegeSetName',
  'AccountType',
  'ActiveFieldContents',
  'ActiveFieldName',
  'ActiveFieldTableName',
  'ActiveLayoutObjectName',
  'ActiveModifierKeys',
  'ActivePortalRowNumber',
  'ActiveRecordNumber',
  'ActiveRepetitionNumber',
  'ActiveSelectionSize',
  'ActiveSelectionStart',
  'AllowAbortState',
  'AllowFormattingBarState',
  'ApplicationArchitecture',
  'ApplicationLanguage',
  'ApplicationVersion',
  'CalculationRepetitionNumber',
  'ConnectionAttributes',
  'ConnectionState',
  'CurrentDate',
  'CurrentExtendedPrivileges',
  'CurrentHostTimestamp',
  'CurrentPrivilegeSetName',
  'CurrentTime',
  'CurrentTimestamp',
  'CurrentTimeUTCMicroseconds',
  'CurrentTimeUTCMilliseconds',
  'DesktopPath',
  'Device',
  'DocumentsPath',
  'EncryptionState',
  'ErrorCaptureState',
  'FileName',
  'FilePath',
  'FileSize',
  'FoundCount',
  'HighContrastState',
  'HostApplicationVersion',
  'HostIPAddress',
  'HostName',
  'LastError',
  'LastMessageChoice',
  'LayoutAccess',
  'LayoutCount',
  'LayoutName',
  'LayoutNumber',
  'LayoutTableName',
  'LayoutViewState',
  'MenubarState',
  'ModifiedFields',
  'MultiUserState',
  'NetworkProtocol',
  'NetworkType',
  'PageCount',
  'PageNumber',
  'PrinterName',
  'QuickFindText',
  'RecordAccess',
  'RecordID',
  'RecordModificationCount',
  'RecordNumber',
  'RecordOpenCount',
  'RecordOpenState',
  'RequestCount',
  'RequestOmitState',
  'ScreenDepth',
  'ScreenHeight',
  'ScreenScaleFactor',
  'ScreenWidth',
  'ScriptAnimationState',
  'ScriptName',
  'ScriptParameter',
  'ScriptResult',
  'SortState',
  'StatusAreaState',
  'SystemAppearance',
  'SystemDrive',
  'SystemIPAddress',
  'SystemLanguage',
  'SystemLocaleElements',
  'SystemNICAddress',
  'SystemPlatform',
  'SystemVersion',
  'TemporaryPath',
  'TextRulerVisible',
  'TotalRecordCount',
  'TouchKeyboardState',
  'TransactionOpenState',
  'TriggerCurrentPanel',
  'TriggerExternalEvent',
  'TriggerGestureInfo',
  'TriggerKeystroke',
  'TriggerModifierKeys',
  'TriggerTargetPanel',
  'UserCount',
  'UserName',
  'UseSystemFormatsState',
  'UUID',
  'UUIDNumber',
  'WindowContentHeight',
  'WindowContentWidth',
  'WindowDesktopHeight',
  'WindowDesktopWidth',
  'WindowHeight',
  'WindowLeft',
  'WindowMode',
  'WindowName',
  'WindowOrientation',
  'WindowStyle',
  'WindowTop',
  'WindowVisible',
  'WindowWidth',
  'WindowZoomLevel',
]);

export const GetFunctions: FunctionDefinition[] = [
  {
    name: 'Get',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns system or environmental values',
    validateArgs: (args: string[]): string | null => {
      if (args.length !== 1) return null; // Basic arg count is handled elsewhere
      const param = args[0].replace(/^["']|["']$/g, ''); // Remove quotes if present
      if (!GET_CONSTANTS.has(param)) {
        return `Invalid Get function parameter: "${param}". Must be one of the valid Get constants.`;
      }
      return null;
    },
  },
  {
    name: 'GetField',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the value of a field',
  },
  {
    name: 'GetFieldName',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the name of a field',
  },
  {
    name: 'GetLayoutObjectAttribute',
    minArgs: 2,
    maxArgs: 2,
    description: 'Returns the attribute of a layout object',
  },
  {
    name: 'GetNthRecord',
    minArgs: 2,
    maxArgs: 2,
    description: 'Returns the record number in the found set',
  },
  {
    name: 'GetRepetition',
    minArgs: 2,
    maxArgs: 2,
    description: 'Returns the value of a repetition',
  },
  {
    name: 'GetRequestAttribute',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns web viewer request attributes',
  },
  {
    name: 'GetResultAttribute',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns web viewer result attributes',
  },
];
