import { HttpException, HttpStatus, Injectable } from '@nestjs/common';



@Injectable()
export class UsersService {
    private users = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'editor' },
        { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'user' },
    ];
    
    getUserById(userId: number) {
        const getUser = this.users.find((user) => user.id == userId);

        if(!getUser) return new HttpException(`No user with ID: ${userId} was found`, HttpStatus.NOT_FOUND);
        return getUser;
    }

}
