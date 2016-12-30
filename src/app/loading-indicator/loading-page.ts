export class LoadingPage {
    public loading: string;
    constructor(value: string) {
        this.loading = value;
    }
    standby(): void {
        this.loading = 'loading';
    }

    ready(): void {
        this.loading = 'loaded';
    }
}
