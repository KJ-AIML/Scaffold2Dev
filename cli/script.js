#!/usr/bin/env node

import { 
    intro, 
    outro,
    select 
} from '@clack/prompts';
import color from 'picocolors';
import * as p from '@clack/prompts';
import { setTimeout as sleep } from 'node:timers/promises';
import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

async function main() {
    intro(color.bgCyan(color.black(' 🚀 Welcome to Scaffold2Dev CLI App ')));

    const projectName = await p.text({
        message: color.cyan('📝 Project name?'),
        validate: (value) => {
            if (!value || value.trim() === '') return color.red('❌ Project name is required');
            if (!/^[a-z][a-z0-9-]*$/.test(value)) {
                return color.red('❌ Project name must start with lowercase letter and contain only lowercase letters, numbers, and hyphens');
            }
            return undefined;
        }
    });

    if (p.isCancel(projectName)) {
        p.cancel(color.red('❌ Operation cancelled.'));
        process.exit(0);
    }

    const languagePrograming = await p.select({
        message: color.magenta('🔧 Language programming?'),
        options: [
            { value: 'rs', label: color.yellow('🦀 Rust') },
            { value: 'py', label: color.blue('🐍 Python') },
        ],
    });

    if (p.isCancel(languagePrograming)) {
        p.cancel(color.red('❌ Operation cancelled.'));
        process.exit(0);
    }

    if (languagePrograming === 'rs') {
        const structureFolder = await p.select({
            message: color.green('📁 Structure folder?'),
            options: [
                { value: 'rs_clean_axum', label: color.cyan('⚡ Clean + Hexagonal and Axum Ready For Dev') }
            ],
        });

        if (p.isCancel(structureFolder)) {
            p.cancel(color.red('❌ Operation cancelled.'));
            process.exit(0);
        }

        // Execute scaffold based on selection
        await executeScaffold(languagePrograming, structureFolder, projectName);

    } else if (languagePrograming === 'py') {
        const structureFolder = await p.select({
            message: color.green('📁 Structure folder?'),
            options: [
                { value: 'py_clean_fastapi', label: color.cyan('⚡ Clean + Hexagonal and FastAPI Ready For Dev') },
                // { value: 'py_agentic', label: color.magenta('🤖 Agentic App') },
                // { value: 'py_hybrid_agnetic_clean', label: color.yellow('🔀 Hybrid Agentic-Clean') },
            ],
        });

        if (p.isCancel(structureFolder)) {
            p.cancel(color.red('❌ Operation cancelled.'));
            process.exit(0);
        }

        // Execute scaffold based on selection
        await executeScaffold(languagePrograming, structureFolder, projectName);
    }

    outro(color.bgGreen(color.black(' 🎉 Project created successfully! ')));
}

async function executeScaffold(languagePrograming, scaffoldType, projectName) {
    const spinner = p.spinner();
    
    try {
        spinner.start(color.cyan('🔨 Creating project structure...'));
        
        // Get the path to scaffold script
        const scriptDir = path.dirname(new URL(import.meta.url).pathname);
        let scaffoldScript;

        if (languagePrograming === 'rs') {
            const scaffoldDir = path.join(scriptDir, '..', 'scaffold', 'rust');
            scaffoldScript = path.join(scaffoldDir, `scaffold_${scaffoldType}`);
        } else if (languagePrograming === 'py') {
            const scaffoldDir = path.join(scriptDir, '..', 'scaffold', 'python');
            scaffoldScript = path.join(scaffoldDir, `scaffold_${scaffoldType}`);
        }

        // Check if scaffold script exists
        if (!fs.existsSync(scaffoldScript)) {
            throw new Error(`Scaffold script not found: ${scaffoldScript}`);
        }
        
        // Make script executable
        execSync(`chmod +x "${scaffoldScript}"`);
        
        // Execute scaffold script with project name
        const result = execSync(`"${scaffoldScript}" "${projectName}"`, {
            cwd: process.cwd(),
            encoding: 'utf8',
            stdio: 'pipe'
        });
        
        spinner.stop(color.green('✅ Project created successfully!'));
        
        // Get dynamic instructions based on scaffold type
        const instructions = getScaffoldInstructions(scaffoldType, projectName);
        
        // Build steps string
        const stepsText = instructions.steps
            .map(step => color.yellow(`  ${step}`))
            .join('\n');
        
        // Build note content
        let noteContent = color.cyan('📋 Next steps:\n') + stepsText;
        
        if (instructions.url) {
            noteContent += color.dim('\n\n') + 
                          color.green(`🌐 ${instructions.description} `) + 
                          color.underline(color.blue(instructions.url));
        } else {
            noteContent += color.dim('\n\n') + 
                          color.green(`✨ ${instructions.description}`);
        }
        
        // Show dynamic next steps
        p.note(
            noteContent,
            color.bgBlue(color.white(` ${instructions.title} `))
        );
        
    } catch (error) {
        spinner.stop(color.red('❌ Failed to create project'));
        p.cancel(color.red(`💥 Error: ${error.message}`));
        process.exit(1);
    }
}

// Function to get instructions based on scaffold type
function getScaffoldInstructions(scaffoldType, projectName) {
    const instructions = {
        'py_clean_fastapi': {
            steps: [
                `📂 cd ${projectName}`,
                `🚀 ./run.sh`,
                `🌐 You'll get more info about the project in the README.md file`
            ],
            url: null,
            description: 'Your FastAPI Clean Architecture app is ready to run',
            title: '🚀 FastAPI Clean Architecture - Ready to Go!'
        },
        'py_agentic': {
            steps: [
                `📂 cd ${projectName}`,
                `🐍 python main.py`
            ],
            url: null,
            description: 'Your Agentic app is ready to run',
            title: '🤖 Agentic App Getting Started'
        },
        'py_hybrid_agnetic_clean': {
            steps: [
                `📂 cd ${projectName}`,
                `🔀 python main.py`
            ],
            url: null,
            description: 'Your Hybrid Agentic-Clean app is ready',
            title: '🔀 Hybrid App Getting Started'
        },
        'rs_clean_axum': {
            steps: [
                `📂 cd ${projectName}`,
                `🦀 ./run.sh`,
                `🌐 You'll get more info about the project in the README.md file`
            ],
            url: null,
            description: 'Your Axum server is ready to run',
            title: '🦀 Rust Axum Getting Started'
        }
    };
    
    return instructions[scaffoldType] || instructions['py_clean_fastapi'];
}

main();