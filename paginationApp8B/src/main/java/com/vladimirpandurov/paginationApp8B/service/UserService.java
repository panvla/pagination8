package com.vladimirpandurov.paginationApp8B.service;

import com.vladimirpandurov.paginationApp8B.domain.User;
import org.springframework.data.domain.Page;

public interface UserService {
    Page<User> getUsers(String name, int page, int size);
}
