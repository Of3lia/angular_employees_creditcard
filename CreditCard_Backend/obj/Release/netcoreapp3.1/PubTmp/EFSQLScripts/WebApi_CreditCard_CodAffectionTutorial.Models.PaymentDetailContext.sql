IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20200904204252_InitialCreate')
BEGIN
    CREATE TABLE [PaymentDetails] (
        [PMId] int NOT NULL IDENTITY,
        [CardOwnerName] nvarchar(100) NOT NULL,
        [CardNumber] varchar(100) NOT NULL,
        [ExpirationDate] varchar(5) NOT NULL,
        [CVV] varchar(3) NOT NULL,
        CONSTRAINT [PK_PaymentDetails] PRIMARY KEY ([PMId])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20200904204252_InitialCreate')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20200904204252_InitialCreate', N'3.1.7');
END;

GO

