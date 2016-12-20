import { TestBed, inject } from '@angular/core/testing';
import { UserServiceService } from './user.service';
describe('UserService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [UserServiceService]
        });
    });
    it('should ...', inject([UserServiceService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=../../../../src/app/user/user.service.spec.js.map