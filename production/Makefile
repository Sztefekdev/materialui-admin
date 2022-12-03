#!/usr/bin/env bash

rootProject = ..
projectName = materialui-admin
targetFolder = next-app
BUCKET_NAME = sztefek-release-v2

BG =\n\033[0;36m-- # Beginning
NC =\033[0m\n # No Color

.PHONY: package
package:
	@(printf "${BG}Install dependencies${NC}")
		cd $(rootProject) && yarn install

	@(printf "${BG}Run build${NC}")
		yarn build

	@(printf "${BG}Clear target folder${NC}")
		rm -rf target
		rm -rf $(targetFolder)

	@(printf "${BG}Create target folder${NC}")
		cp -r $(rootProject)/.next/standalone .
		mv ./standalone ./$(targetFolder)

	@(printf "${BG}Copy static files${NC}")
		cp -r $(rootProject)/.next/static ./$(targetFolder)/.next
		cp -r $(rootProject)/public ./$(targetFolder)

	@(printf "${BG}Move to test production${NC}")
		mkdir target
		zip -r ./target/$(projectName).zip $(targetFolder) docker-compose.yml Dockerfile 1> /dev/null

.PHONY: release
release:
	@(printf "${BG}Upload package to S3 repository${NC}")
		ls target
		aws s3 cp target/${projectName}.zip "s3://${BUCKET_NAME}/${projectName}/dev/${projectName}.zip";