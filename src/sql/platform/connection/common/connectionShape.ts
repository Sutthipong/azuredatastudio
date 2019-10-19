/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export interface ConnectionShape {
	serverName: string;
	databaseName: string;
	userName: string;
	authenticationType: string;
	options: { [key: string]: any };
	providerName: string;
	groupId: string;
}
