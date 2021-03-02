import { NextPageContext } from 'next';
import Router from 'next/router';
import store from '@store/store';

export class BaseAPI {
	protected baseURL: string;
	private token: string = store?.getState()?.user?.token ?? null;

	constructor(baseURL: string) {
		this.baseURL = baseURL;
	}

	protected async get<T>(url: string, ctx?: NextPageContext): Promise<T> {
		const res = await fetch(`${this.baseURL}/${url}`, {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				Accept: 'application/json',
				Authorization: this.token,
			},
		});

		return res.status === 401 ? this.redirectToLogin(ctx) : await res.json();
	}

	private redirectToLogin(ctx?: NextPageContext) {
		const loginURL = `${process.env.publicURL}/signin`;
		if (ctx.res) {
			ctx.res?.writeHead(302, { Location: loginURL });
			ctx.res?.end();
		} else {
			Router.replace(loginURL);
		}
	}
}
