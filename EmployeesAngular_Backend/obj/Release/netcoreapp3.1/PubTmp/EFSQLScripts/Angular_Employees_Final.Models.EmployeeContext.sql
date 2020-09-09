IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20200908145831_InitialCreate')
BEGIN
    CREATE TABLE [Employees] (
        [EmpId] int NOT NULL IDENTITY,
        [EmpName] nvarchar(50) NOT NULL,
        [EmpSurname] nvarchar(50) NULL,
        [EmpJob] nvarchar(50) NOT NULL,
        [EmpSalary] nvarchar(20) NOT NULL,
        CONSTRAINT [PK_Employees] PRIMARY KEY ([EmpId])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20200908145831_InitialCreate')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20200908145831_InitialCreate', N'3.1.8');
END;

GO

